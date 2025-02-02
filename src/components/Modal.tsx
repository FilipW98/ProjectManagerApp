import { ModalProps } from "../types";

export default function Modal({ children,ref }: ModalProps) {
	return <dialog ref={ref} className="backdrop:bg-stone-900/90 p-5 rounded-md shadow-md">{children}</dialog>;
}