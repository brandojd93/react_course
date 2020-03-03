import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import View from '../ui/View'
import Title from '../ui/Title'
import colors from '../../utils/colors'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import CircleButton from '../ui/CircleButton'
import TaskContainer from '../containers/TaskContainer'
import Header from '../ui/Header'
import '../../style/TasksView.scss'
import {
  setSelectedList as setSelectedListAction,
  toggleListTask as toggleListTaskAction,
} from '../../action-creators/app'

function TasksView(props) {
  const {
    list, toggleListTask, handleModalShow, setSelectedList,
  } = props

  const goBack = () => {
    setSelectedList(null)
  }

  return (
    <View margin={0} background={list.color}>
      <div className="TasksView">
        <div className="TasksView-header">
          <Header
            left={
              <Icon name="arrow_back" style={{ color: colors.white }} />
            }
            right={
              <Icon name="more_vert" style={{ color: colors.white }} />
            }
            onLeft={goBack}
          />
          <CircleButton color={colors.white} flat size={40}>
            <Icon name={list.icon} style={{ color: list.color }} />
          </CircleButton>
          <div className="TasksView-header-text">
            <Title color={colors.white}>{list.title}</Title>
            <p>
              {list.tasks.length}
              {' '}
              tasks
            </p>
          </div>
        </div>
        <Card radius={20} padding={30} style={{ flexBasis: '75vh', overflow: 'hidden' }}>
          <TaskContainer handleTaskChange={toggleListTask} color={list.color} tasks={list.tasks} />
        </Card>
        <CircleButton
          onClick={() => handleModalShow(true)}
          color={list.color}
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
          }}
        >
          <Icon name="add" style={{ color: colors.white }} />
        </CircleButton>
      </div>
    </View>
  )
}


TasksView.propTypes = {
  list: PropTypes.object.isRequired,
  handleTaskChange: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func.isRequired,
  setSelectedList: PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => ({
  setSelectedList: (payload) => dispatch(setSelectedListAction(payload)),
  toggleListTask: (payload) => dispatch(toggleListTaskAction(payload)),
})

export default connect(null, mapDispatchToProps)(TasksView)
