import ProgressBar from './ProgressBar'
import Body from './Body'
import { useExam } from '../hooks/useExam'
import Loading from './Loading'

const Page = () => {
  const { isLoading } = useExam()
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <ProgressBar />
      <Body />
    </>
  )
}

export default Page
