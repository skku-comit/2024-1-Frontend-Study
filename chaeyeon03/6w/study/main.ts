interface Study {
  imageSrc: string;
  title: string;
  mentor: string;
  level: string;
  stack: string[];
  campus: string;
  description: string;
}

const storedStudy = window.localStorage.getItem('study'); //local storage에서 'study' 키로 저장된 데이터를 가져와 storedStudy 변수에 저장
if (!storedStudy) {
  window.location.href = '/'; //local storage에 'study' 데이터가 없을 경우 홈페이지로 전환
  const study: Study = JSON.parse(storedStudy); //JSON.parse : json문자열의 구문 분석. local storage에서 가져온 스터디 정보가 Study에 맞게 파싱되어 study에 저장됨
  const main = document.querySelector('main'); //'main' 태그를 찾아서 main이라는 변수에 저장

  //이미지 추가
  const image = document.createElement('img');
  image.src = study.imageSrc;
  image.alt = study.title;

  //스터디 이름 추가
  const title = document.createElement('h1');
  title.textContent = study.title;

  //전체적인 스터디 정보를 담을 infoWrappper 추가
  const infoWrapper = document.createElement('div');
  infoWrapper.setAttribute('id', 'info-wrapper');

  //난이도 추가
  const level = document.createElement('p');
  level.textContent = '📚  ' + study.level;

  //캠퍼스 추가
  const campus = document.createElement('p');
  campus.textContent = '🏢  ' + study.campus;

  //스터디 멘토 추가
  const mentor = document.createElement('p');
  mentor.textContent = '👤  ' + study.mentor;

  //사용 스택 추가
  const stack = document.createElement('p');
  stack.textContent = '🔧  ' + study.stack.join(', ');

  //infoWrapper에 난이도, 캠퍼스, 스터디 멘토, 사용 스택 한 번에 추가
  infoWrapper.append(level, campus, mentor, stack);

  //스터디 설명 paragraph 생성
  const description = document.createElement('p');
  description.textContent = study.description;
  description.setAttribute('id', 'description');

  main.append(image, title, infoWrapper, description); //생성된 요소를 'main'요소에 추가
}
