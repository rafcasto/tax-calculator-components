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
                sh 'npm run build'
                sh 'npm run rollup'
            }
        }
    }
}