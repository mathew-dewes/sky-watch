


import Form from 'next/form'
import DropDown from '@/components/ui/Dropdown';


const Communities = ["Northland", "Auckland", "Waikato", "Wellington"]


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

