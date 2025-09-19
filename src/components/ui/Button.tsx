"use client"

type ButtonProps = {
    text?: string,
    isSubmitting?: boolean,
    submittingText?: string
  onClick?: () => void; 
    danger?: boolean
}


export default function Button({ text = "Button", isSubmitting = false, submittingText, onClick, danger }: ButtonProps) {
    return <button onClick={onClick} disabled={isSubmitting} className={`px-5 py-2.5 text-center
        rounded-lg text-sm w-full sm:w-auto 
        font-medium 
        cursor-pointer 

        shadow-sm 
        focus:outline-none
        transition 
        duration-300 
        ease-out

     hover:brightness-90 
     hover:ring-2
        hover:shadow-md 
        active:scale-95 ${danger ? "bg-red-500" : "bg-accent-500"}`}>{isSubmitting ? submittingText : text}</button>
}

