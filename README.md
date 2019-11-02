- Clone the repository
```
git clone https://matheus_risovas@bitbucket.org/keycar/kc-fence-api.git
```
- Run npm install to install packages
```
npm install
```
- Install serverless globally
``` 
npm install serverless -g 
```
- Set environment variables
``` 
export AWS_ACCESS_KEY_ID

export AWS_SECRET_ACCESS_KEY

export DYNAMO_ENDPOINT="http://localhost:8000" || "http://localhost:8000/shell" 
``` 
- Run serverless dynamodb instance installation
```
serverless dynamodb install
```
- After the installation, run the serverless dynamodb instance
```
serverless dynamodb start
```
- Open another terminal and run serverless offline
```
serverless offline
```
- Open one more terminal, install dynamodb-admin and run it
```
npm install dynamodb-admin -g
dynamodb-admin
```