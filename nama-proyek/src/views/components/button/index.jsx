import { Link } from "react-router-dom"

export default function SpinnerButton({ to }) {
    return (
        <>
        <Link to={to} onClick={() => window.scrollTo(0, 0)} className="border mt-10 px-5 py-2 rounded-2xl animate-spin">
            Lanjut 😹
        </Link>
        </>
    )
}