import { Loader2 } from 'lucide-react'

interface LoadingProps {
	size?: number
	className?: string
}

export function Loading({ size = 24, className = '' }: LoadingProps) {
	return (
		<div className='flex items-center justify-center w-full h-full min-h-[200px]'>
			<Loader2
				className={`animate-spin text-blue-600 ${className}`}
				size={size}
			/>
		</div>
	)
}
