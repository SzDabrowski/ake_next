import { Resend } from "resend";
import * as React from "react";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const { name, email, message, phoneNumber } = await req.json();

	try {
		const data = await resend.emails.send({
			from: "info@akepolska.pl",
			to: "info@akepolska.pl",
			subject: `STRONA: ${name} chce się skontaktować!`,
			text: `Nazwisko: ${name} \nEmail: ${email}\N Numer Telefonu: ${
				phoneNumber ? phoneNumber : "Brak"
			}\n\nWiadomość: \n ${message}`,
			html: `<p>Nazwisko: ${name}</p><p>Email: ${email}</p><p>Wiadomość: ${message}</p>`,
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
