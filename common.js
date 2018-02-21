function translateHandler(self) {
				var target = document.querySelector('body');
				if (self.value ==="한국")
					switchLanguage(self, '한국', '한국어끔','word_ko', 'ko');
				else if (self.value === "한국어끔")
					switchLanguage(self, '한국', '한국어끔','word_ko', 'ko');
				else if (self.value === "영어")
					switchLanguage(self, '영어', '영어끔','word_en', 'en');
				else if (self.value === "영어끔")
					switchLanguage(self, '영어', '영어끔','word_en', 'en');
			}


function switchLanguage(self, selText, setText, selClass, setClass){
				if(self.value === selText) {
					self.value = setText;
					setTagClass(selClass, setClass);
				} else {
					self.value = selText;
					setTagClass(setClass, selClass);
				}	
}

function setTagClass(selClass, setClass){
					var words = document.getElementsByClassName(selClass);
					var cnt = words.length;
					for(var i = 0; i < cnt; i++){
						words[i].classList.add(setClass);
					}
					words = document.getElementsByClassName(setClass);
					for(var i = 0; i <cnt; i++)
						words[i].classList.remove(selClass);
}
