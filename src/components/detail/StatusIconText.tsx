interface StatusIconTextProps{
      icon: string
      text: string
}

function StatusIconText({icon, text}:StatusIconTextProps) {
      return (
            <span className='bg-[#21262d] border-[0.1rem] border-[rgba(240,246,252,0.2)]  rounded text-center flex gap-1  justify-center
                        sm:w-40'
            >
                  <img
                        className='w-6 p-1 white--image'
                        src={icon} alt="icon-img" 
                  />
                  <h3 className='tracking-widest text-[#b62324] '>{text}</h3> 
            </span>
      )
}

export default StatusIconText