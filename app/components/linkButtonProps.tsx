import Link from "next/link";

interface LinkButtonProps {
    href: string;
    label: string;
    className?: string;
}

const LinkButton = ({ href, label, className}: LinkButtonProps) => {
    className ??= `flex justify-center p-2 my-1 
                    text-gray-600 bg-gray-200 hover:bg-gray-300 
                    rounded-lg`;
    return (
        <Link
            href={href}
            className={className}>
            {label}
        </Link>
    );
}

export default LinkButton;