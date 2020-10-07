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
          ls
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