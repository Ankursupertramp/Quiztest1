const quizData =[
   {
   question: "Popular GTA games like GTA5 and GTA SA contain a parody version of which fashion magazine?",
   a: "Cosmopolitan",
   b : "Vogue",
   c : "ELLE",
   d: "W",
   correct : "b",
   },

   {
   question : "Which video game antagonist character became a meme on Tiktok in 2021 due to its resemblance with a girl's face?",
   
   a : "Lance Vance",
   b : "Kefka",
   c : "Bloody Mary",
   d : "Thwomp",
   correct : "d"
   
   },
   {
   question : "This rumored character in Minecraft looks like Steve, roams around forests and is known for spooking players out. Who is this spooky guy?",
   
   a : "Herobrine",
   b : "Barbarian King",
   c : "EnderWorm",
   d : "Shulker",
   correct : "a"
   },
   {
      question : "Name the special spell in Clash of Clans released in Christmas of 2012.",
      
      a : "Santa Spell",
      b : "X-Mas Spell",
      c : "Ultra-freeze Spell",
      d : "Snow Spell",
      correct : "a"
      },
  {
      question : "Name the special spell in Clash of Clans released in Christmas of 2012.",
         
         a : "Santa Spell",
         b : "X-Mas Spell",
         c : "Ultra-freeze Spell",
         d : "Snow Spell",
         correct : "a"
   }
   ] ;
   
   const quiz = document.getElementById('quiz')
   const answerEls = document.querySelectorAll('.answer')
   const questionE1 = document.getElementById('question')
   const a_text= document.getElementById('a_text')
   
   const b_text = document.getElementById('b_text')
   const c_text = document.getElementById('c_text')
   const d_text = document.getElementById('d_text')
   
   const submitBtn = document.getElementById('submit')
   const nextBtn = document.getElementById('next')

   
   let currentQuiz = 0
   let score = 0
   let core =0
     
   
   loadQuiz()
   
   function loadQuiz() {
   
      deselectAnswers()
   const currentQuizData = quizData[currentQuiz]
   
   questionE1.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
   
   
   }
   
   function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.checked = false)
   }
   function getSelected() {
     let answer
     answerEls.forEach(answerEl => {
      if( answerEl.checked) {
                answer = answerEl.id
             }
     })
     return answer
   
   }
   submitBtn.addEventListener('click', () => {
      corr = document.querySelector('.corr');
      inco = document.querySelector('.inco');
     
      
       const answer = getSelected()
       if(answer) {
          if(answer === quizData[currentQuiz].correct) {
            
             score+=1;
            updateScore(score);
            
          }
        
          
          
          else{

             core+=1
             updateCore(core);

          }
   
         
       }
   })

   nextBtn.addEventListener('click', () => {
  

         currentQuiz++
       if(currentQuiz < quizData.length) {
         loadQuiz()
     }
        
   })
   function updateScore(score){
      scoreCount.innerHTML = "Right: "+ score
    
    }
    function updateCore(core){
      scoreCCount.innerHTML = "Wrong: "+ core
    
    }