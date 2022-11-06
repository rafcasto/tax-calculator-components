pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
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
                sh 'npm run build'
                sh 'npm run rollup'
            }
        }
    }
}