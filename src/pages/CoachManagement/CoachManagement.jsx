import React from 'react';
import Card from '../../components/Card/Card'
import './CoachManagement.scss'
import Button from '../../components/Button/Button'

const CoachManagement = () => {
    return (
        <div>
            <Card cardWidth='100vh' cardHeight='60vh'>
                <section className="coachplace">
                    <div className="coachplace__header">
                         <h3>UN ESTUDIANTE SE HA POSTULADO</h3> 
                         <div>
                             <h4>COACH MANAGMENT</h4>
                         </div>
                    </div>
                     <div className="coachplace__separator"></div>
                     <div className="coachplace__info">
                         <div>
                             <p><small><strong>estudiante:</strong> </small> Ricardo Tornero</p>
                         </div>
                        <div className="coachplace__">
                            <p><small><strong>postulacíon a puesto:</strong></small> FRONTEND DEVELOPER</p>
                            <p><small><strong>empresa solicitante:</strong></small>  FACEBOOK INC.</p>                         
                            
                        </div>
                     </div>
                     <div>
                         
                            <p><strong>se postulo el dia 30 de Dic 2020</strong></p>

                            <p>Platzi master
                            Quisque interdum libero eget vestibulum placerat. 
                            Maecenas dapibus mauris id tellus gravida dignissim. 
                            Integer pretium convallis leo, tincidunt viverra purus posuere in. 
                            Donec consequat consectetur augue semper rutrum. </p>

                            <p>Platzi master
                            Quisque interdum libero eget vestibulum placerat. 
                            Maecenas dapibus mauris id tellus gravida dignissim.</p>
                         
                     </div>
                     <p><strong>Por favor escribe una recomendación sobre el estudiante:</strong></p>
                     <form action="">
                        <input type="text-area" 
                        style={{
                            width:'90%', 
                            height: '200px'
                        }}/>
                     </form>
                     <div className="coachplace__btn">
                          <Button buttonTitle="ENVIAR" />
                     </div>
                       
                </section>
            </Card>
            
        </div>
    )
}

export default CoachManagement
