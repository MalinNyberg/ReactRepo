import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {PulseLoader} from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GitHubRepos.css";

export default function GithubRepos(){
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const githubUrl = 'https://api.github.com/users/MalinNyberg/repos';
    useEffect(()=>{
        fetch(githubUrl)
        .then(resp => resp.json())
        .then((data)=> {
            setRepos(data);
            setIsLoading(false);
        })
        .catch(error => console.log(error))

    },[])

    if(isLoading){
        return(<><PulseLoader/></>)
    }
    return(<>
        <div className="repos">
            {repos.map(repo =>(
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h3>{repo.name}</h3>                       
                        </Card.Title>
                        <Card.Text>
                            <p>{repo.description}</p>
                            <p>{repo.language}</p>
                        </Card.Text>
                        <Button><a href={repo.html_url}target="_blank">View On GitHub</a></Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
        </>
        )


}