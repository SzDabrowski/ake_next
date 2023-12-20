// ContactSection.js

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { z, string } from "zod";

import { Fade } from "react-awesome-reveal";

import styles from "./ContactSection.module.scss";
import FormInput, {
	TextArea,
	CheckboxInput,
} from "../Generic/FormFields/FormInput/FormInput";
import Button from "../Generic/Button/Button";

type FormValues = {
	name: string;
	email: string;
	phoneNumber?: string;
	message: string;
	contactAgreement: boolean;
	dataAgreement: boolean;
};

const errorMessages = {
	required: "To pole jest wymagane.",
	minLength: `Wprowadź wiecej znaków.`,
	pattern: "Wprowadź poprawną wartość.",
	email: "Wprowadź poprawny adres e-mail.",
	phoneNumber: "Wprowadź poprawny numer telefonu.",
	agreement: "Zgoda jest wymagana. ",
};

const ContactSection = () => {
	const schema = z.object({
		name: z.string().min(5, { message: errorMessages.required }),
		email: z
			.string()
			.min(1, { message: errorMessages.required })
			.email(errorMessages.email),
		phoneNumber: z
			.string()
			.optional()
			.refine(
				(value): value is string => {
					// Check if the value is defined and matches the regex
					return (
						value === undefined ||
						value === "" ||
						/^\+?[0-9]{9,15}$/i.test(value)
					);
				},
				{ message: errorMessages.phoneNumber }
			),
		message: z.string().min(1, { message: errorMessages.required }),
		contactAgreement: z.boolean().refine((value) => value === true, {
			message: errorMessages.agreement,
		}),
		dataAgreement: z.boolean().refine((value) => value === true, {
			message: errorMessages.agreement,
		}),
	});

	type ValidationSchemaType = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ValidationSchemaType>({ resolver: zodResolver(schema) });

	const SendEmail = async (formData: FormValues) => {
		console.log(`numer telefonu: ${formData.phoneNumber}}`);

		await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: formData.name,
				email: formData.email,
				message: formData.message,
			}),
		}).then(() => {
			// Toast notification
			toast.success("Wysłano wiadomość!");
		});

		reset();
	};

	return (
		<section
			className={styles.contact}
			id="contact"
		>
			<Fade
				direction="up"
				triggerOnce
				fraction={1}
			>
				<h5>Napisz do nas</h5>
				<p>
					Otrzymaj najlepsze rozwiązania kadrowe dostosowane do twoich potrzeb
				</p>

				<form
					autoComplete="off"
					onSubmit={handleSubmit(SendEmail)}
				>
					<FormInput
						name="name"
						type="text"
						label="Nazwisko*"
						placeholder="Jan Kowalski"
						register={register} // Pass the register function
						validation={{
							required: {
								value: true,
								message: "required",
							},
						}}
						error={errors.name} // Pass the error object
					/>

					<FormInput
						name="email"
						type="email"
						label="Email*"
						placeholder="jan.kowalski@poczta.pl"
						register={register} // Pass the register function
						validation={{
							required: {
								value: true,
								message: "required",
							},
						}}
						error={errors.email} // Pass the error object
					/>
					<FormInput
						name="phoneNumber"
						type="text"
						label="Numer telefonu"
						placeholder="+48 123 123 123"
						register={register}
						validation={{
							required: {
								value: false,
							},
						}}
						error={errors.phoneNumber}
					/>

					<TextArea
						label="Wiadomość*"
						name="message"
						placeholder="Moja wiadomość..."
						register={register} // Pass the register function
						error={errors.message} // Pass the error object
						validation={{
							required: {
								value: true,
								message: "required",
							},
						}}
					/>

					<CheckboxInput
						name="contactAgreement"
						label="*Oświadczam, że wyrażam zgodę na kontakt telefoniczny lub za pośrednictwem systemu SMS oraz poczty elektronicznej."
						register={register}
						error={errors.contactAgreement}
					/>

					{/* Replace the second checkbox with CheckboxInput */}
					<CheckboxInput
						name="dataAgreement"
						label="*Oświadczam, że wyrażam zgodę na przetwarzanie moich danych osobowych."
						register={register}
						error={errors.dataAgreement}
					/>

					<span>* - Pole wymagane</span>

					<Button
						type="submit"
						text="Wyślij!"
					/>
				</form>
			</Fade>
		</section>
	);
};

export default ContactSection;
