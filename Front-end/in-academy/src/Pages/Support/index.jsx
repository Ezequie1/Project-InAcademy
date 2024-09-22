import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Context } from '../../Context/authProvider';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import './style.css'

export function SupportPage(){
    const { userData } = useContext(Context)

    return(
        <div className='container'>
            <section className='supportPageContent'>
                <h1 style={{color: 'var(--title)'}}>Perguntas frequentes</h1>
                <p style={{color: 'var(--subtitle)'}}>Veja perguntas frequentes feitas pelos usuários que podem ser igual a sua!</p>
                <div className="usualyAsk">
                    <RenderAcordion 
                        ask={'Como me inscrevo em um curso?'} 
                        response={'Após criar sua conta, basta navegar até a página do curso desejado e clicar em "Inscrever-se". Você pode pagar diretamente pela plataforma.'} 
                    />
                    <RenderAcordion 
                        ask={'Posso acessar os cursos a qualquer momento?'} 
                        response={'Sim, os cursos são online e podem ser acessados 24 horas por dia, 7 dias por semana, em qualquer dispositivo com internet.'} 
                    />
                    <RenderAcordion 
                        ask={'Existe um certificado ao final do curso?'} 
                        response={'Sim, ao concluir o curso e passar nas avaliações, você recebe um certificado digital automaticamente.'} 
                    />
                    <RenderAcordion 
                        ask={'Os cursos têm prazo para serem concluídos?'} 
                        response={'Depende do curso. Alguns possuem prazos específicos, enquanto outros são autônomos e podem ser concluídos no seu ritmo.'} 
                    />
                    <RenderAcordion 
                        ask={'Posso baixar o conteúdo do curso?'} 
                        response={'Alguns materiais, como PDFs e apresentações, estão disponíveis para download, mas as aulas em vídeo só podem ser assistidas online.'} 
                    />
                    <RenderAcordion 
                        ask={'Há suporte para dúvidas durante o curso?'} 
                        response={'Sim, você pode enviar suas dúvidas para os instrutores ou participar de fóruns de discussão com outros alunos.'} 
                    />
                    <RenderAcordion 
                        ask={'Posso assistir as aulas no celular?'} 
                        response={'Sim, nossa plataforma é otimizada para dispositivos móveis, permitindo que você assista às aulas pelo aplicativo ou navegador do celular.'} 
                    />
                </div>
                <h1 style={{color: 'var(--title)'}}>Suporte</h1>
                <p style={{color: 'var(--subtitle)'}}>Envie um email para o time de suporte descrevendo o erro ou falha encontrado!</p>
                <div className="inputsText">
                    <RenderTextFied label="Nome" defaultValue={userData.name}/>
                    <RenderTextFied label="Email" defaultValue={userData.email}/>
                    <RenderTextFied label="Qual foi o erro encontrado?" multiline rows={5} />
                    <div className='buttonSuportSubmit'>
                        <button>Enviar</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

function RenderAcordion({ ask, response }){
    return(
        <div className='questionDiv'>
            <HelpOutlineIcon fontSize='large'/>
            <div>
                <h3>{ ask }</h3>
                <p>{ response }</p>
            </div>
        </div>
    )
}

function RenderTextFied({ label, defaultValue, multiline, rows}){
    return(
        <TextField
            id="outlined-basic"
            label={label} 
            variant="outlined" 
            defaultValue={defaultValue} 
            rows={ rows === 0 ? 1 : rows} 
            multiline={multiline}
            sx={{
                "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--blue)",
                    borderWidth: "2px",
                },
                "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--blue)",
                    borderWidth: "2px",
                    },
                },
                "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--blue)",
                    },
                },
                },
                "& .MuiInputLabel-outlined": {
                color: "var(--title)",
                fontWeight: "bold",
                "&.Mui-focused": {
                    color: "var(--blue)",
                    fontWeight: "bold",
                },
                },
            }}
        />
    )
}