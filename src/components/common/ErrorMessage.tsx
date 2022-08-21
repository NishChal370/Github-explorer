interface ErrorMessageProps {
      message: string
}

function ErrorMessage({message }: ErrorMessageProps) {
      return (
            <div className="flex justify-center mt-[6rem] text-red-500 text-lg">
                  Error: {message}
            </div>
      )
}

export default ErrorMessage