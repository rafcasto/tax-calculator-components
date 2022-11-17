pipeline {
    agent {
        docker { 
            image 'rafcasto/nodejs-build:latest' 
            args '-e NPM_TOKEN=$NPM_SECRET'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm cache clean --force'
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'npm run test'
            }
        }
        stage('package'){
            steps{
            
                withCredentials([usernamePassword(credentialsId: 'GitCredentials', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    
		            sh 'git config --global user.email "rafcasto@gmail.com"'
                    sh 'git config --global user.name "rafcasto"'
                    sh 'git config --local credential.helper "!f() { echo username=\\$GIT_USERNAME; echo password=\\$GIT_PASSWORD; }; f"' 
                    sh 'git checkout main'
                    sh 'git pull'
                    sh 'npm version minor'
                    sh('git push')
                }
                sh 'npm run build'
                sh 'npm run rollup'
                sh 'npm publish'
            }
        }
    }
}