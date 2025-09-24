


import Form from 'next/form'
import DropDown from '@/components/ui/Dropdown';
import { getCommunityNames } from '@/server/queries/community';

const filters = ["Most recent", "Most liked", "Most commented"]



export default async function Filters({community, filter}:{community: string, filter: string}){

    const data = await getCommunityNames();
    const communities = data.map((item)=>item.name)

    

    return (
        <Form action={""} className="flex flex-col lg:flex-row gap-5 sm:items-center mb-5">
            <div className='flex gap-5 sm:gap-10'>
                <div>
                    <p className='mb-2'>Community</p>
   <DropDown type='community' options={communities} defaultValue={community ?? "View All"}/>
                </div>

                <div>
                    <p className='mb-2'>Sort by</p>
   <DropDown type='filter' options={filters} defaultValue={filter ?? "Most Recent"}/>
                </div>
    


            
               
            </div>
          

        
         
         
        </Form>
    )
}

