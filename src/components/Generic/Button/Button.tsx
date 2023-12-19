import styles from "./Button.module.scss";

interface ButtonProps {
	text: string;
	type?: "submit" | "reset" | "button";
	action?: () => void;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			className={styles.Button}
			onClick={props.action}
			type={props.type ? props.type : "button"}
		>
			{props.text}
		</button>
	);
};

export default Button;
