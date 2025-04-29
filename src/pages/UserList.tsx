import { useEffect, useState } from 'react'
import axios from "axios"
import { DataTable } from '../components/data-table'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export type UserData = {
    id : number,
    name : string,
    email : string,
    phone : string,
    username : string,
    website : string
    address : {
        street : string,
        city : string,
        geo : {
            lat : string,
            lng : string
        },
        suite : string,
        zipcode : string
    },
    company : {
        name : string,
        catchPhrase : string,
        bs : string
    },
}

const UserList = () => {
    const [userdata, setUserData] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchuser = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserData(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchuser()
    }, [])

  return (
    <div>
        {loading ? (
        <div className=' flex justify-center items-center min-h-screen'>
            <DotLottieReact
                src="https://lottie.host/c4701648-b51a-4214-83ba-53ba51af7e80/gXd3HNVWqJ.lottie"
                loop
                autoplay
                width={'800px'}
                height={'600px'}
            />
        </div>
        ) : (
            <DataTable data={userdata} />
        )}
    </div>
  )
}

export default UserList

