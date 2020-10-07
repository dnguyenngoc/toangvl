pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build......'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy......'
      }
    }

    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'Test 1'
          }
        }

        stage('test case 1') {
          steps {
            echo 'Test 2'
          }
        }

        stage('test case 2') {
          steps {
            echo 'test 2'
          }
        }

        stage('test case 3') {
          steps {
            echo 'test 3'
          }
        }

      }
    }

    stage('Prod') {
      steps {
        echo 'prod...'
      }
    }

  }
}