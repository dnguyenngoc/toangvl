pipeline {
  environment { 
    registry = "duynguyenngoc/toangvl" 
    registryCredential = 'dockerhub' 
    dockerImage = 'backend' 
  }
  agent any
  stages {
    stage('Initialize'){
        def dockerHome = tool 'docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}