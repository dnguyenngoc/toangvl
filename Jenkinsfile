pipeline {
  environment {
    registry = "duynguyenngoc/toangvl"
    registryCredential = 'dockerhub'
    backend = 'backend'
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/dnguyenngoc/toangvl'
      }
    }
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":" + backend
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
  }
}