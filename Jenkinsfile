pipeline {
  environment { 
    registry = "duynguyenngoc/toangvl" 
    registryCredential = 'dockerhub' 
    dockerImage = 'backend' 
  }
  agent any
  stages {
    stage('Building image') {
      def dockerHome = tool 'docker'
      env.PATH = "${dockerHome}/bin:${env.PATH}"
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}