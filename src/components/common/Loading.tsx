
const Loading = () =>{
      return (
            <div className="flex justify-center mt-[6rem] gap-3">
            <svg className="animate-spin h-10 w-8 mr-3 bg-white" viewBox="20 10 24 24"></svg>
            <svg className="animate-spin h-10 w-8 mr-3 bg-blue-500" viewBox="20 10 24 24"></svg>
            <svg className="animate-spin h-10 w-8 mr-3 bg-green-500" viewBox="20 10 24 24"></svg>
            <svg className="animate-spin h-10 w-8 mr-3 bg-purple-500" viewBox="20 10 24 24"></svg>
            <svg className="animate-spin h-10 w-8 mr-3 bg-red-500" viewBox="20 10 24 24"></svg>
            </div>
      )
}

export default Loading