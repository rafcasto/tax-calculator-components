pipeline {
    agent {
        docker { image 'rafcasto/nodejs-build:latest' }
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
                sh 'export NEW_VERSION=$(npm version minor)'
                withCredentials([usernamePassword(credentialsId: 'GitCredentials', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    sh("git tag -a some_tag -m 'Jenkins'")
                    sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/rafcasto/tax-calculator-components.git --tags')
                }
               
                sh 'npm run build'
                sh 'npm run rollup'
            }
        }
    }
}