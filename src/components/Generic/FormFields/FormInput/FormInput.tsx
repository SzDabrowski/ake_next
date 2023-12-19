import React, { useState } from "react";
import styles from "../FormFields.module.scss";
import { AnimatePresence } from "framer-motion";
import { PhoneInput } from "react-international-phone";

interface FormInputProps {
	name: string;
	type?: string;
	placeholder?: string;
	register?: any;
	error?: any;
	validation: any;
	label: string; // New prop for label text
}

interface CheckboxInputProps {
	name: string;
	register: any;
	error: any;
	label: string;
}

interface iErrorMessage {
	error: any;
}

const ErrorMessage = (props: iErrorMessage) => {
	return (
		<AnimatePresence
			mode="wait"
			initial={false}
		>
			{props.error && (
				<p className={styles.errorMessage}>{props.error.message}</p>
			)}
		</AnimatePresence>
	);
};

const FormInput = (props: FormInputProps) => {
	const [isValid, setValid] = useState<boolean>(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Check if the input is valid
		const isValidInput = e.target.checkValidity();
		setValid(isValidInput);
		console.log(isValidInput);
	};

	return (
		<div>
			<label
				className={`${styles.Label} ${props.error ? styles.error : ""}`}
				htmlFor={props.name}
			>
				{props.label}
			</label>

			{props.type === "phoneNumber" ? (
				<PhoneInput
					className={`${styles.input} ${!isValid ? styles.error : ""}`}
					id={props.name}
					type={props.type}
					placeholder={props.placeholder}
					validation={props.validation}
					{...props.register(props.name)}
					onChange={handleInputChange}
				/>
			) : (
				<input
					className={`${styles.input} ${props.error ? styles.error : ""}`}
					id={props.name}
					type={props.type}
					placeholder={props.placeholder}
					validation={props.validation}
					{...props.register(props.name)} // Register the input
					onkeydown={handleInputChange}
				/>
			)}
			<ErrorMessage error={props.error} />
		</div>
	);
};

export const TextArea = (props: FormInputProps) => {
	return (
		<div>
			<label
				className={`${styles.Label} ${props.error ? styles.error : ""}`}
				htmlFor={props.name}
			>
				{props.label}
			</label>

			<textarea
				className={`${styles.input} ${props.error ? styles.error : ""}`}
				id={props.name}
				placeholder={props.placeholder}
				{...props.register(props.name)} // Register the textarea
			></textarea>
			<ErrorMessage error={props.error} />
		</div>
	);
};

export const CheckboxInput = (props: CheckboxInputProps) => {
	return (
		<div className={styles.agreement}>
			<input
				className={styles.checkbox}
				type="checkbox"
				{...props.register(props.name, {
					required: "You must agree to the terms",
				})}
			/>
			<label htmlFor={props.name}>{props.label}</label>
			<ErrorMessage error={props.error} />
		</div>
	);
};

export default FormInput;
