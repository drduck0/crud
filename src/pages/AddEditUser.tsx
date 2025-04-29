import { useNavigate, useParams } from 'react-router-dom';
import { AddEditForm } from '@/components/AddEditForm';
import { UserData } from '@/pages/UserList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AddEditUser = () => {
  const [userdata, setUserData] = useState<UserData | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (data: UserData) => {
    console.log('Submitted:', data);
    navigate('/');
  };

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUserData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        {loading ? (
          <div className="text-center text-muted-foreground">
            <DotLottieReact
                src="https://lottie.host/c4701648-b51a-4214-83ba-53ba51af7e80/gXd3HNVWqJ.lottie"
                loop
                autoplay
                width={'800px'}
                height={'600px'}
            />
          </div>
        ) : (
          <AddEditForm item={userdata} onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default AddEditUser;
