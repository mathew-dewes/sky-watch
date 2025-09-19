


import Form from 'next/form'
import { redirect } from 'next/navigation';
import DropDown from '@/components/ui/Dropdown';


const Communities = ["Northland", "Auckland", "Waikato", "Wellington"]



export async function filterPosts(formData: FormData){
  const orderBy = formData.get("orderBy") as string | null;
  const order = formData.get("order") as string | null;
    const query = new URLSearchParams();
  if (orderBy) query.set("orderBy", orderBy);
  if (order) query.set("order", order);

  redirect(`/post/all?${query.toString()}`);
  
}

export default function Filters({community}:{community: string}){



 

    return (
        <Form action={""} className="flex flex-col lg:flex-row gap-5 items-center mt-5">
            <h2>Filter region:</h2>
            <div className='flex gap-5'>
    
   <DropDown communities={Communities} defaultValue={community}/>
            
               
            </div>
          

        
         
         
        </Form>
    )
}

