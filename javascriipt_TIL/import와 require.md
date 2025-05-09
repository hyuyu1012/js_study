자바스크립트에서는 모듈을 불러오는 문법 두 가지가 존재한다.
require, import

require : NodeJS에서 사용되고 있는 CommonJS 키워드
import : ES6에서 새롭게 도입된 키워드

const name = require('module.js');
import name from 'module.js'


주요 차이점
require()는 CommonJS를 사용하는 Node.js문이지만 import()는 ES6에서만 사용
require()는 코드가 실행될 때 그 위치에서 작동되지만, import()는 항상 맨위로 이동
require()는 프로그램의 어느 지점에서나 호출 할 수 있지만, import()는 파일의 시작 부분에서만 실행할 수 있다.

하나의 프로그램에서 두 키워드를 동시에 사용할 수 있다.
일반적으로 import()가 사용자가 필요한 모듈 부분만 선태하고 로드할 수 있기 때문에 더 선호되며, require()보다 성능이 우수하다.