import Question from '@/components/forms/Question'
import { getUserById } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'

export default async function AskQuestionPage() {
	// const { userId } = auth()
	const userId = 'CL123456789'
	if (!userId) redirect('/sign-in')
	const mongoUser = await getUserById({ userId })
	console.log(mongoUser)
	return (
		<div>
			<h1 className='h1-bold text-dark100_light900'>Ask a question</h1>
			<div className='mt-9'>
				<Question mongoUserId={JSON.stringify(mongoUser._id)} />
			</div>
		</div>
	)
}
