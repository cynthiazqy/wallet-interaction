import {
	useConnectModal,
	useAccountModal,
	useChainModal,
} from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export default function Header() {
	const { openConnectModal } = useConnectModal()
	const { openAccountModal } = useAccountModal()
	const { openChainModal } = useChainModal()

	const { address, isConnected } = useAccount()

	console.log('address==', address)
	console.log('isConnected==', isConnected)

	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">DaisyUI</a>
				<a
					target="_blank"
					rel="noreferrer"
					className="text-base ml-3 mt-1 font-medium"
					href="https://twitter.com/coffiasse">
					Twitter
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					className="text-base ml-6 mt-1 font-medium"
					href="https://github.com/coffiasd">
					Github
				</a>
			</div>

			<div className="navbar-start"></div>

			<div className="navbar-end">
				<button className="btn btn-ghost btn-circle">
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
						</svg>
						<span className="badge badge-xs badge-primary indicator-item"></span>
					</div>
				</button>

				{isConnected ? (
					<>
						<button
							className="btn btn-sm btn-outline btn-primary ml-3 normal-case"
							onClick={openAccountModal}>
							Profile
						</button>
						<button
							className="btn btn-sm btn-outline btn-primary ml-3 normal-case"
							onClick={openChainModal}>
							Chain
						</button>
					</>
				) : (
					<button
						className="btn btn-sm btn-outline btn-primary ml-3 normal-case"
						onClick={openConnectModal}>
						connect wallet
					</button>
				)}
			</div>
		</div>
	)
}
