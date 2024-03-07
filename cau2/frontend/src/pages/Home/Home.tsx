import { useEffect, useState } from 'react'
import { StudentApi } from '../../../api/student'
const Home = () => {
  const [student, setStudent] = useState<any>([])
  useEffect(() => {
    const getStudent = async () => {
      try {
        const res = await StudentApi.getAllStudent()
        console.log(res)
        setStudent(res.data.data.metaData)
      } catch (error) {
        console.log(error)
      }
    }
    getStudent()
  }, [])
  return (
    <div className='flex items-center bg-red-900 text-red-400'>
      {student.map((student: any) => {
        return <div>{student.fullName}</div>
      })}
    </div>
  )
}

export default Home
