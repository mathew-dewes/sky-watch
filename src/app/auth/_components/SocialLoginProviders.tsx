import GithubButton from "./GithubButton";
import GoogleButton from "./SigninWithGoogleButton";

export default function Providers({isSubmitting}:{
    isSubmitting: boolean
}){
    return <div className='my-5 flex flex-col gap-5'>
         <GoogleButton isLoading={isSubmitting}/>
         <GithubButton isLoading={isSubmitting}/>
                    </div>
}