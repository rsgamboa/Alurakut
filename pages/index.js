import Box from "../src/components/Box"
import MainGrid from "../src/components/MainGrid"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }}/>
    </Box>
  )
}

export default function Home() {
  const ProfileSocialGit = 'rsgamboa';
  const profileFriends = [
    'juunegreiros',
    'gustavoguanabara',
    'omariosouto',
    'glaucodonadellom',
    'peas',
    'MariyaSha',
  ]
  const profileGroups = [
    'devbr',
    'CocoaHeadsBrasil',
    'backend-br',
    'devfsa',
    'react-brasil',
    'coffee',
  ]

  return (
    <>
    <AlurakutMenu />

  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSidebar githubUser={ProfileSocialGit}/>
    </div>


    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box>
        <h1 className="title">
          Bem vindos(a)
         </h1>
        <OrkutNostalgicIconSet />
      </Box>
    </div>


    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
        <h2 class="smallTitle">
        Amigos ({profileFriends.length})
        </h2>
      <ul>
      {profileFriends.map((itemAtual) => {
        return (
          <li>
          <a href={`/users/${itemAtual}`} key={itemAtual}>
            <img src={`https://github.com/${itemAtual}.png`} />
            <span>{itemAtual}</span>
          </a>
          </li>
        )
      })}
      </ul>
        </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Comunidades ({profileGroups.length})
        </h2>
        <ul>
      {profileGroups.map((itemAtual) => {
        return (
          <li>
          <a href={`/users/${itemAtual}`} key={itemAtual}>
            <img src={`https://github.com/${itemAtual}.png`} />
            <span>{itemAtual}</span>
          </a>
          </li>
        )
      })}
      </ul>
      </ProfileRelationsBoxWrapper>
    </div>
 </MainGrid>

 </>
  )
}
