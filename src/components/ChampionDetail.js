import { withRouter } from "react-router";
import { Card, HeaderDiv, DetailDiv, Li } from "../styles/ChampionDetailStyle";

const championDetail = (props) => {
  return (
    <DetailDiv>
      <Card>
        <img
          width="350px"
          alt="test"
          src={`https://ddragon.canisback.com/img/champion/tiles/${
            props.location.state.urlName === "Fiddlesticks"
              ? "FiddleSticks"
              : props.location.state.urlName
          }_0.jpg`}
        ></img>
        <div>
          <HeaderDiv>
            <h2>{props.location.state.champion.name}</h2>
          </HeaderDiv>
          <HeaderDiv>
            <h4>{props.location.state.champion.title}</h4>
          </HeaderDiv>
          <br />
          <br />
          <HeaderDiv>Tags: {props.location.state.champion.tags}</HeaderDiv>
          <br />
          <HeaderDiv>
            Stats:
            <Li>Attack: {props.location.state.champion.info.attack}</Li>
            <Li>Defense: {props.location.state.champion.info.defense}</Li>
            <Li>Magic: {props.location.state.champion.info.magic}</Li>
            <Li>Difficulty: {props.location.state.champion.info.difficulty}</Li>
          </HeaderDiv>
        </div>
        <br />
        {props.location.state.champion.blurb}
        <br />
      </Card>
      <Card>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Stat</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hp </td>
              <td>{props.location.state.champion.stats.hp}</td>
            </tr>
            <tr>
              <td>Hp/lvl</td>
              <td>{props.location.state.champion.stats.hpperlevel}</td>
            </tr>
            <tr>
              <td>Mana Points </td>
              <td>{props.location.state.champion.stats.mp}</td>
            </tr>
            <tr>
              <td>Mana Points/lvl </td>
              <td>{props.location.state.champion.stats.mpperlevel}</td>
            </tr>
            <tr>
              <td>Movement Speed </td>
              <td>{props.location.state.champion.stats.movespeed}</td>
            </tr>
            <tr>
              <td>Armor</td>
              <td>{props.location.state.champion.stats.armor}</td>
            </tr>
            <tr>
              <td>Armor/lvl </td>
              <td>{props.location.state.champion.stats.armorperlevel}</td>
            </tr>
            <tr>
              <td>magicResist</td>
              <td>{props.location.state.champion.stats.spellblock}</td>
            </tr>
            <tr>
              <td>Magic Resist/lvl </td>
              <td>{props.location.state.champion.stats.spellblockperlevel}</td>
            </tr>
            <tr>
              <td>Attack Range</td>
              <td>{props.location.state.champion.stats.attackrange}</td>
            </tr>

            <tr>
              <td>Hp Regen</td>
              <td>{props.location.state.champion.stats.hpregen}</td>
            </tr>
            <tr>
              <td>Hp Regen/lvl</td>
              <td>{props.location.state.champion.stats.hpregenperlevel}</td>
            </tr>
            <tr>
              <td>Mana Regen</td>
              <td>{props.location.state.champion.stats.mpregen}</td>
            </tr>
            <tr>
              <td>Mana Regen/lvl</td>
              <td>{props.location.state.champion.stats.mpregenperlevel}</td>
            </tr>
            <tr>
              <td>Critical Chance</td>
              <td>{props.location.state.champion.stats.crit}</td>
            </tr>
            <tr>
              <td>Critical Chance/lvl</td>
              <td>{props.location.state.champion.stats.critperlevel}</td>
            </tr>
            <tr>
              <td>Attack Damage</td>
              <td>{props.location.state.champion.stats.attackdamage}</td>
            </tr>
            <tr>
              <td>Attack Damage/lvl</td>
              <td>
                {props.location.state.champion.stats.attackdamageperlevel}
              </td>
            </tr>
            <tr>
              <td>Attack Speed</td>
              <td>{props.location.state.champion.stats.attackspeed}</td>
            </tr>
            <tr>
              <td>Attack Speed/lvl</td>
              <td>{props.location.state.champion.stats.attackspeedperlevel}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </DetailDiv>
  );
};

export default withRouter(championDetail);