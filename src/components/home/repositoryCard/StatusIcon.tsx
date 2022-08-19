interface StatusIconProps{
      icon: string
      name: string
      statusTotal: number
}

function StatusIcon({statusTotal, icon, name}: StatusIconProps) {
      
      return (
            <span className="flex gap-1">
                  <img className="white--image w-3 h-4"
                        src={icon} alt={name} 
                  />

                  <h6 className="text-muted--color">{statusTotal}</h6>
            </span>
      )
}

export default StatusIcon