interface MainTextProps{
      link: string
      title: string
      name: string
      textSize?: string
}

function MainText({link, title, name, textSize}:MainTextProps) {
      return (
            <h3 className={`tracking-widest font-extrabold mb-1 ${textSize}`}>
                  <span className='font-bold'>{title}: </span>
                  <a className='text-link--blue  hover:cursor-pointer'
                        href={link}
                  >{name}</a>
            </h3>
      )
}

export default MainText