import * as React from "react";

interface EmailTemplateProps {
	name: string;
	email: string;
	phoneNumber?: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	email,
	phoneNumber,
	message,
}) => (
	<div>
		<h1>{name} chce się z nami skontaktować!</h1>
		<p> adres mail: {email}</p>
	</div>
);
