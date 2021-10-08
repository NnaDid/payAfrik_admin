import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'

function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to ="/newUser">
                   <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMRERYTFBERExYWGRgWFhYXFxYTFhYWFhMXGRcWFhYZHyoiGRwnHRYZIzQjJysuMTEyHCE2OzYvOiowMS4BCwsLDw4PHRERHDAnIicwMDAwMDA6MDAwMDAwMDAwMDAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAuMP/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/xAA/EAACAgEBBAcFBgUDAwUAAAABAgADEQQFEiExBgcTQVFhkSJScYGhFCMykrHBQmJygqKywtEzY3NTg6PS8P/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA2EQACAQICBAwEBwEAAAAAAAAAAQIDEQQSITFBkQUUIjJRU2FicaLi8BMWgeEVIzNCobHB0f/aAAwDAQACEQMRAD8AsqIiQGkIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiegRNL0k6WaXQL9/b7R/DUo37G/tHIeZwJXO2+t/UWEjTU10r3M/3r+n4QfWSQpTnqRHKrGOsuCMTztrOmG0Ljl9dqfgthqH5a8CdVdvasctZqh/71v8A9pLxWXSR8YXQekpmef8AZ3WBtKjGNXZYB/Dbi4H4lva+smewOuFThdXSU7u0q9ofE1nj6ZnMsPNHUa8Xr0FmxOts7aFWorFtNqWoeTKcj5+B8jOzICZO4iIngEREAREQBERAEREAREQBERAEREAREQBK/wCsfrEGlLabTEG/lZZ+JafIdxs+g+M2nWX0r+wabFZ+/uytf8gH47D8OQ8yJRLEkkkkk8STzJPMnzlqhRzcp6ivWqftR96i97HL2OzuxyzMSST5kz4iAuSAOJPIcyfgJeKxibDaGzDVRprjn79bGx/RZuj6EH5ztaLohrrhlNLbg8iwCD/LjJ1016I226HSVUV79mn9kjIB3WrG9z5+0okM60Yyir7SSNKUk3YqyJ39o7D1On43UW1j3ipK/NhwnQkqaelEbTWs2XR3pDfobe0osK+8h41uPB1/fnL06GdKqdo076exYuBbUTlkPiPFT3GeeJsuje27NFqEvrPFThl7nQ/iQ/H6HBkVWkpq+07p1HHwPSMTq7K2hXqKK76zlLFDL8+4+YPD5TtTOtYvJ30iIieAREQBERAEREAREQBERAEREARE6u1tX2FFtv8A6dbv81QkfUT21w9RRfWTto6vaFpBylR7GvwwhIYj4tn6SNRnx4nvPiTzmy6N7HbWamvTrw3jlm9xBxdvT6kTVVox8DP0yfid/of0Qu2g5I+7qU4e0jhn3UH8TfQd8trYHRbS6Mfc1Lv4wbW9qw/3HkPIYE2Gz9FXRUtVahUQYUfufMznmTVryqPRqNOjh4wWnWIiJXLBhhkYIBHgeI9JEek/V1ptSC9Krp7eeVGK2P8AMg4D4iS+J3CpKDvFnE6cZq0keeNrbMt01rU3IUde7uI7mU/xKfGdWXb0+6NLrtMSoAuqBapvH3qz5H9cSkiJrUKqqRvtMutS+G7FrdRu2S1d2kY/gIurz3BuDqPLIB+ZlmShuqnWmralI7rN+o/3KSPqol8ytiI2mTUHybCIiVyYREQBERAEREAREQBERAEREASP9Y125szVHxrKj+4gSQSH9cF27suwe89a/wCYz+k7pq8kjipoiyjJZ/UzszFV2oI4s3ZKf5V4t9SPSVhLv6CVrp9lUMx3R2ZuY/1sXz58CJbxkrU7dJDhY3nd7CRxIbrelO0bCfsmy7CndZfmst5hCVwPnNdfr+kTcqKU8lFB/wBTmUFQb1tb0XXXjsTf0ZYkxNP0V1WrsqP2yhabVOAVKkOvvboJ3T3c5uJFKNnYmi7q4iRHpXrdrC7c0enUVjH3p7Ji5IyeDt7IHLlma6nanSBMb2jos8c9mD/hYP0kqotq91vRE6yTtZ7iwJRvWJsv7PtC5QMJYRcnws4sPk4YSztg9JrrHFWq0V2lc8FfBapz4b+MKfIyL9dWlG9p7fJ6z9GH7yXC3hVs9qIcQ1OnmWwhXRe/s9bp3zjdvqz8DYAfoTPSJnl5LChDDmpDD4qc/tPUAbIyO/j68ZPilpTK+H2mYiJULIiIgCIiAIiIAiIgCIiAIiIAlf8AXldjRVL79w9FrY/8SwJWHXzfhNKni1r/AJVQf7pNR56I63MIXsno8l+z9Tqd5+0pPsqMbu6ArMSOZJBPpLl2BVuaXTr7tNQ9K1lcdUVoY6qhuKuiNjyyyN/qWWhp6wqKo5KoA+AAA/ScYqbzOL6b/Qlw0FlU10W3M0e3el9dFy6aqt9TqXIC01nGCeW+x5ePI+PCaXYPWQ1+pGnbRkMzMoNVgsOVzn2WA3uR5GTkLg7w4EcmHAj4GarS9GdNVabUorWwktvgANls5IbmOZ5YkcZU1GzjdncoVXK6lo8DaowIyO/5fTumZhVx/wDszMhJrHX2hrBTWzlXfALbqDLEKMnnwAwOZIEheh6z+1Z9zQWslamxytil1rGMvuYxgZ8ZOL6Q4IJOGBUgHgQRggjkRNbsno1p9LY1lNa1s6lG3RgFTzXHIA+WJLCVNJ5o3IpxqN8mSRz7D25TrKu1psDLyI5Mp8GXuMjnWloDdXpUGcteqcPBxg/SS6mhEGEREHgqhR6ATh1+mVzWzDJrYsvkxRlz6MZzGajPMjpwc45XrKO6Z7Jr0mqsorZmVQpG9gkby5IJHOX/ALCu7TTUP71VR9a1zKA6ZantddqG5/eFR8FAX9peHQK3f2bpW/7Kj04ftL9a/wAOLev7FCnb4kravubyIiVCwIiIAiIgCIiAIiIAiIgCIiAJUfXvdnU6dPdqdvz2Y/2S3JSvXZZnaSj3dPWPV7W/eWMP+oQ1+adHqr1G5tADP/UrdPn7LAf4y5KjkCVH1O7FTV7TQOSFpRr8A4LFWRVGfDL5Mu/bWnCspAABGOHAcJxi4cq/Yd4Wto+H4mviIlMvCJ8WlseyAT5nAnwbWP4U49+9wHyODmeHtjmiBE9PBOvrLAqkk4ABJ+AE7E2F2wq9To3ptHC1WBI4MAwxwPdwnUIZnYjq1lSWY8w6i3fdn99mb8zE/vL36qrt/ZVH8u+v5XMovW6c1W2Vkgmt2Qkd+4xXP0ly9S9u9s0L7ttg9SD+81MTzFYzKD5RN4iJQLgiIgCIiAIiIAiIgCIiAIiIAlEdbl29tW7+Val9Kx/zL3nnvrDu39p6o/8AcI9FUftLOF55BiNSOn0Z29doNQmopI3lyCG/C6H8SN5H6YEsxOuVNQ9VT6U1BnVXsNm8EzwyoxxGSOeOGZUES3OlGesrRbi7o9JTi1Nu4hcgkKMnEivVl0m+1afsbD99SAD/AD18lf49x+APfJa6gggjgeBmNODhLKzZpzU0pbDqLZqbF36aUsQ8mW1HHnyPPPdPhTrycfYz6Y+uZoNpaC3TWF6rLasng6EgHwDryJHnOBtsa9hutrrMcvZG6x+c4vB621uNGOGqSV6ag09rzX+tmyUtqnrZUtRUdsAILFZ+PfujiB5zuzQ9G9kFD2r5LHlvEs5zzZmPEnE30XKlWMYysrPpte1+y7eo6O39qppNPZe/EIOAzjeY8FUfE8JDdr9dtlmnNdGmFNrLu9ozBxXwwSi49o+GfQ8po+tTpMNRaNPWc1UkliOT28QfkvEfEmQmamHw6Uby1sx8TUzystSMscnJJJPEk8SSeZJ75b3UVbnS3r7t2fk1a/uJUEtHqFu46pP/AAuP/kU/tJsQvy2R0uei0oiJml0REQBERAEREAREQBERAEREATzX0hv7TVah/etsP+ZA/SejtdcK6nc8lRm/KpP7TzGXLHePM8T8TxlzCrWVsQ9RiIiXCudrZW07NLct9Tbroc+RHerDvUjunoPT3hxkenhwnnIjPDx4esv6vKYHIgAegmbj7LK/E0cBFyzLw/02bqCMEAjwPGcFeiqU5WqsHxCiYq1Y7+H6TkOpXxlG6ZdtJaDlkc6wdqtp9Dca2KuQE3hwK75wcHuOO/um2u1ZPAcP1kW6xay2z7fIoT8nE6pyvUiu08qU2qcpPoZUeIiJvGEJP+o3UY11ydz6cn5pbX+zGQCS3qj1G5tWr+dbK/VMj6rI6q5DOoO0kXtERMsviIiAIiIAiIgCIiAIiIAiIgGg6xNZ2Wy9U/ea+zHxtZax/rnnyXH1367c0VdIPG20E/01gt+uJTc0MMrR0lOs+UIiJYIjZdFtCdRrKK+42KT/AEod5voPrLxsXMrzqj2QS1mqYcB91X5k8XI+HAessWZGOnmqZVsNfAQywzdP+HAYnOygz47ISjY0MxxgTqdIdB2+kvqHEvW2P6gMr9QJsQuJmdR0O6OJ8pNPaeegYm96c7G+y6t1AwjntK/DdY8QPgcj0min0MZKSUltPnJRcW4vYJteiOr7HXaez3bUz8GO7+81UyCRxHAjiPiOInrV1Y8PUUTpbC1ov01Nw5WVo/5lGfrkTuzJtY0E7iIieHoiIgCIiAIiIAiIgCInxfctaM7HCqCzHyAyZ6Cmuurafa65aQeFFYB/rs9oj8u76yCTuba151OouvbObbHf4BmJUfIYHynWpqZzhVLHwAzNSCyxSM9vNLxPmdvZOzX1NgReXNm7lHif2E2mzeiF1nG0ipfDm5+XIfOSzZ2hroTcrXdHf4k+JPfKmIxsYK0NL/g1sFwTUqyUqqyx/lm42BrEoqWnGEQYUj/d48e+b6twwyCCPESJTkpuZDlWK/A/rMfM3pZv1MFF8zR/RLZiaCrbVg57rfLH6TkO3n9xfUz3MitxSr0G7nFqdSlYyzAeXefgJortr2N3hfgP3nTZiTkkk+J4zzMSQwUv3M63TSj7dWAAFavJrPfk8wT4HHy4StLayrFWBDA4IPMGWlNXtrYVep4n2XH8Y8PBh3y7hcX8Pkz1f19ivwhwUqqU6OiS2dP3K/mJttodG9RTx3O0X3k4+q8xNUR3TXhUjNXi7nzVWjUpPLUVn2l2dTW0e12cKieNDun9rEuv+oj5SbSl+pbbHY61qGPs3rgf+RMsPVd70EuiZ9eOWbLFGV4iIiQkoiIgCIiAIiIAmJmdXamvXT1mxu7gB3knkBD0aT1JyaS1s57LAoySFA7ycD1MifTvagv0j6fT2Lv24Rm44VD+PB7ycY+c1O0Ne9zbzMT4D+FfgJ1pXeIafJRs0uCY2/Nf0X/SP6HofSmDYzWHw/CvoOJm80+nSsYRFQeAAE5ZiRzrTnznc0KOFo0f04pCYIn1MSMsGA0zBExjzgH1E+cnwjPkfpAPqYmOPlG7AGc8vWZAiZgCdLW7Jov/AOpUpPiPZb1E7sT2MnF3TsczpxmrTSa7SOp0WNNqX6e0hq3WxQ3HijAgbw+GJcGh21TaBh1DEcVJwQe8DPOQCJO8VUfO0mdPgmg9MOT4atzLNmZBdi7cspYAkunepOcDxXz8pN6LQ6hlOQRkHyMmhNTMnE4WdCVnpT1M+4iJ0VhERAEREAxId0w1u/aKweFY4/1H/gSYO+ASe4Z9JXGrvNjs55sxb1OZDXdlY0+C6alUc3s/t+2cUzESqb4iIgCIiAIiIAiIgCIiAIiIAiIgCYmYgHzJb0L1m9W1ZP4Dlf6W7vX9ZFJteid+5qFHcwK/TI/SSUpWkipjqeehLs07icRES4fMCIiAYzGZu9weAjcHgJJkK/GOwi+3bt3T2HP8JHrw/eQAy5TWDzAPyE+Psye4n5RIqlDM9ZewfCqw8Wsl7vpt/jKdiXF9mT3E/KJg6ev3E9BI+Kd73vLfzAuq83pKeiW3pWqsLhUX2HKNlQPaABOPL2hMam2irO/2a4RrDkD8CY3m5d2RHFO973j5gXVeb0lSxLgWms8QqePIcp8XiqtGdhWFUFmOBwVRkmOKd73vHzAuq83pKiiXD2CH+BPHkOU4Ueo2NUEXeVVc+yMYcsBg+PsmOKd73vHzAuq83pKkiXCdPX7iegj7PX7tfoI4p3ve8fj66rzekp6JcYoT3E9BOs9tC2rUeyFjAsqYG8QvNsY4Dzjine97x8wLqvN6SpYlpW7S0y73Jij9kwSp7WFhTf3QqKSTu8eAmLNqaVWZWKKVUsd6tlA3UDsN4rjeCkEr+IDujine97x+PrqvN6Srolq16zTsqsAvtP2YBrZX3/dKFd5TjjxHAceU4ztXS5YAFinMJTZYT7W6SgRCXAYYJXIB4HEcU73vePx9dV5vSVdEs6vbWlbcwr4sYIrHT3BSxcoFLmvdU7wI4kTu6WyiwuE7NjW3ZvgD2XCq26eHPDD1jine97x+PrqvN6SpMTs7IfdvqP8AOv1YD95bP2ZPcT8omfsye4n5RCwtnzve85lw8pRa+Fr73pNTMZm73R4CNweAlnIY/GOw0mYm73B4CIyHvGOw+oiJ2VRERAE1XSLZ7X1birWzZBXtGKqCOTHCtvY57pGD5c5tZ8wCL6zou7l3BqDu1hLYI3g1dYRWwOW/WDjjjuzOPUdFrLu0axdNvWLqVJ4v2fbBNwoSmW3Sp93nkeElsCARSzovYzs27SpasqN2ywComkp2aoEAZMknJxz/AAk8Zya3oxv9qiV6dUehqeI3jvFML7G57ChvayDx8M8ZJpkQCJ6rovbZvAGmne4ixCxdB2Ar+zqN1c1ZG9nI5/hB4zsVbAsFyXBaKtzcHYoWNRwbN4/gHtDfDKd3gRjvzJJAgEd2lsO257WxSDbUE3yWZ6WCsClfsjeRieJyp588jHVbomzsWZaFyH3a13ilRd6Tis7o4EVNk4HF+UlZgQDV7O2SEqNbHCi57EFbMgVTcbEThjgMgFeXMcp87U0d1l1bIKwqhg1naFbBvKy5RezZSRnIyRx9Zt4gEZPRyxEZFYX5ZChsfsmQrSazZv015L8T8fEEzOq6Ls+/97xNZUElirWtWEstdOSkqu77PvMecksQCIP0XvPENVWc2FQLLD9nNnZ/eI+6Dc/sHgwUe1jOBx2NWi1Re5mWhGdSlTra7biF+A7M1DBwSxO8csAOA5b6BANTbsnJrVX7Ouutlr3fxrYy7gsGRjKqTjOeJPCNgbKbTG0G1rFZkKZCAgLUiEtuqPaJX6DvzNtEAzMTMQBERAEREA//2Q==" alt="" className="userShowImg"/>
                       
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Chris Didi</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div> 


                    <div className="userShowBottom">
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle"> 12334544656</span>  
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle"> 10.12.1999 </span>  
                        </div>

                        <div className="userShowInfo"> 
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle"> +1 234 456 67</span>  
                        </div>
                        
                        <div className="userShowInfo"> 
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle"> nnadidsuccess@yahoo.com</span>  
                        </div>
                        <div className="userShowInfo"> 
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">New York | USA</span>  
                        </div>

                    </div>

                </div>


                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input type="text" 
                                           placeholder ="annabeck99" 
                                           className="userUdateInput"
                                     /> 
                                </div>
                                <div className="userUpdateItem">
                                    <label>Full Name</label>
                                    <input type="text" 
                                           placeholder ="annabeck99" 
                                           className="userUdateInput"
                                     /> 
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input type="email" 
                                           placeholder ="annabeck99@yahoo.com" 
                                           className="userUdateInput"
                                     /> 
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input type="tel" 
                                           placeholder ="annabeck99@yahoo.com" 
                                           className="userUdateInput"
                                     /> 
                                </div>
                        </div>

                        <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src="data:image/jpeg;base64,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" alt="" 
                                         className="userUpdateImg" 
                                    />
                                    <label htmlFor="file"> <Publish className="userUpdateIcon"/></label>
                                    <input type="file" id ="file" style={{ display:'none'}}/>
                                </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default User
