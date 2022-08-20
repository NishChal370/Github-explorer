interface AvatarProps{
      icon: string
}

function Avatar({icon}:AvatarProps) {
      return (
            <div className='w-[100%] h-[100%] self-center
                  sm:w-[70%] sm:h-[100%]'
            >
                  <img
                        className='w-full h-fit object-cover rounded
                              sm:h-[100%]'
                        src={icon} alt="user-img" 
                  />
            </div>
      )
}

export default Avatar