interface IconProps {
	type: string
	className?: string
	[key: string]: any
}

function Icon({ type, className, ...props }: IconProps) {
	switch (type) {
		case 'heart':
			return (
				<svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" version="1.1" width="29" height="29" viewBox="0 0 256 256">
					<g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
						<path d="M 83.627 13.423 L 83.627 13.423 c -8.498 -8.498 -22.403 -8.498 -30.901 0 L 45 21.148 l -7.725 -7.725 c -8.498 -8.498 -22.403 -8.498 -30.901 0 s -8.498 22.403 0 30.901 l 13.247 13.247 c 0 0 0 0 0 0 L 45 82.951 l 25.379 -25.379 l 13.248 -13.248 C 92.124 35.826 92.124 21.921 83.627 13.423 z" transform=" matrix(1 0 0 1 0 0) " />
					</g>
				</svg>
			)
		case 'heart-border':
			return (
				<svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256">
					<g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
						<path d="M 45 84.334 L 6.802 46.136 C 2.416 41.75 0 35.918 0 29.716 c 0 -6.203 2.416 -12.034 6.802 -16.42 c 4.386 -4.386 10.217 -6.802 16.42 -6.802 c 6.203 0 12.034 2.416 16.42 6.802 L 45 18.654 l 5.358 -5.358 c 4.386 -4.386 10.218 -6.802 16.42 -6.802 c 6.203 0 12.034 2.416 16.42 6.802 l 0 0 l 0 0 C 87.585 17.682 90 23.513 90 29.716 c 0 6.203 -2.415 12.034 -6.802 16.42 L 45 84.334 z M 23.222 10.494 c -5.134 0 -9.961 2 -13.592 5.63 S 4 24.582 4 29.716 s 2 9.961 5.63 13.592 L 45 78.678 l 35.37 -35.37 C 84.001 39.677 86 34.85 86 29.716 s -1.999 -9.961 -5.63 -13.592 l 0 0 c -3.631 -3.63 -8.457 -5.63 -13.592 -5.63 c -5.134 0 -9.961 2 -13.592 5.63 L 45 24.311 l -8.187 -8.187 C 33.183 12.494 28.356 10.494 23.222 10.494 z" transform=" matrix(1 0 0 1 0 0) " />
					</g>
				</svg>
			)
		default: return <></>
	}
}

export default Icon