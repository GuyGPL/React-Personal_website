import React from 'react'
import SkillCard from './SkillCard'
import {
  NodeSvg, ReactSvg, HtmlSvg, JavaScriptSvg, MongoDBSvg, ExpressSvg, 
  AngularSvg, MySQLSvg, TypeScriptSvg, PythonSvg, BootstrapSvg, FlaskSvg
  , PowerBISvg, GitSvg, NumpySvg, PandasSvg
} from './Svgcollection'

const MySkill = (props) => {

  return (
    <section className='my-skill-section'>
      <div className="my-skill">
        <div className='my-skill__title'>
          <h1 className='heading-2'>Things That I Can Do ...</h1>
        </div>
        
        <div className="my-skill__content">
          <SkillCard icon={<HtmlSvg />} title="HTML & CSS"/>
          <SkillCard icon={<JavaScriptSvg />} title="JavaScript"/>
          <SkillCard icon={<TypeScriptSvg />} title="TypeScript"/>
          <SkillCard icon={<PythonSvg />} title="Python"/>
          <SkillCard icon={<BootstrapSvg />} title="Bootstrap"/>
          <SkillCard icon={<ReactSvg />} title="React.js & Redux"/>
          <SkillCard icon={<AngularSvg />} title="Angular.js & NgRx"/>
          <SkillCard icon={<FlaskSvg />} title="Flask"/>
          <SkillCard icon={<NodeSvg />} title="Node.js"/>
          <SkillCard icon={<ExpressSvg />} title="Express.js"/>
          <SkillCard icon={<MongoDBSvg />} title="MongoDB"/>
          <SkillCard icon={<MySQLSvg />} title="MySQL"/>
          <SkillCard icon={<PowerBISvg />} title="Power BI"/>
          <SkillCard icon={<NumpySvg />} title="NumPy"/>
          <SkillCard icon={<PandasSvg />} title="Pandas"/> 
          <SkillCard icon={<GitSvg />} title="Git"/>
        </div>
      </div>
    </section>
  )
}

export default MySkill