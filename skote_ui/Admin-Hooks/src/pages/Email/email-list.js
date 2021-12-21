import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { map } from "lodash"
import {
  Input,
  Label,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//redux
import { useSelector, useDispatch } from "react-redux"

import { getMails as onGetMails } from "store/actions"

const MailsList = () => {
  const dispatch = useDispatch()

  const { mails } = useSelector(state => ({
    mails: state.mails.mails
  }))

  const [mailList, setmailList] = useState([])
  const [folder_Menu, setfolder_Menu] = useState(false)
  const [tag_Menu, settag_Menu] = useState(false)
  const [more_Menu, setmore_Menu] = useState(false)

  useEffect(() => {
    dispatch(onGetMails())
  }, [dispatch])

  const makeFav = id => {
    const allItems = [...mails]
    const itemIndex = allItems.findIndex(mail => mail.id === id)
    allItems[itemIndex].fav = !allItems[itemIndex].fav

    setmailList(allItems)
  }

  const handleChange = e => {
    const id = e.target.id
    setState(prevState => {
      return {
        mails: prevState.mails.map(mail =>
          mail.id === +id ? { ...mail, value: !mail.value } : mail
        ),
      }
    })
  }

  const handleClick = () => {
    setState(prevState => {
      return {
        list: prevState.mails.filter(mail => !mail.value),
      }
    })
  }

  return (
    <React.Fragment>
      <div className="btn-toolbar p-3" role="toolbar">
        <div className="btn-group me-2 mb-2 mb-sm-0">
          <Button type="button" color="primary">
            <i className="fa fa-inbox" />
          </Button>
          <Button type="button" color="primary">
            <i className="fa fa-exclamation-circle" />
          </Button>
          <Button type="button" color="primary" onClick={handleClick}>
            <i className="far fa-trash-alt" />
          </Button>
        </div>
        <Dropdown
          isOpen={folder_Menu}
          toggle={() => {
            setfolder_Menu(!folder_Menu)
          }}
          className="btn-group me-2 mb-2 mb-sm-0"
        >
          <DropdownToggle className="btn btn-primary  dropdown-toggle" tag="i">
            <i className="fa fa-folder" />{" "}
            <i className="mdi mdi-chevron-down ms-1" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#">Updates</DropdownItem>
            <DropdownItem to="#">Social</DropdownItem>
            <DropdownItem to="#">Team Manage</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          isOpen={tag_Menu}
          toggle={() => {
            settag_Menu(!tag_Menu)
          }}
          className="btn-group me-2 mb-2 mb-sm-0"
        >
          <DropdownToggle className="btn btn-primary  dropdown-toggle" tag="i">
            <i className="fa fa-tag" />{" "}
            <i className="mdi mdi-chevron-down ms-1" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#">Updates</DropdownItem>
            <DropdownItem to="#">Social</DropdownItem>
            <DropdownItem to="#">Team Manage</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          isOpen={more_Menu}
          toggle={() => {
            setmore_Menu(!more_Menu)
          }}
          className="btn-group me-2 mb-2 mb-sm-0"
        >
          <DropdownToggle
            className="btn btn-primary  dropdown-toggle"
            tag="div"
          >
            More <i className="mdi mdi-dots-vertical ms-2" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#">Mark as Unread</DropdownItem>
            <DropdownItem to="#">Mark as Important</DropdownItem>
            <DropdownItem to="#">Add to Tasks</DropdownItem>
            <DropdownItem to="#">Add Star</DropdownItem>
            <DropdownItem to="#">Mute</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <ul className="message-list">
        {map(mails, (mail, index) => (
          <li key={index}>
            <div className="col-mail col-mail-1">
              <div className="checkbox-wrapper-mail">
                <Input
                  type="checkbox"
                  id={index}
                  checked={false}
                  onChange={handleChange}
                />
                <Label htmlFor={index} className="toggle" checked={index} />
              </div>
              <Link to="#" className="title">
                {mail.name}
              </Link>
              <span
                onClick={() => makeFav(mail.id)}
                className={
                  mail.fav === true
                    ? "star-toggle fas fa-star"
                    : "star-toggle far fa-star"
                }
              />
            </div>
            <div className="col-mail col-mail-2">
              <Link to="#" className="subject">
                Hello –{" "}
                <span className="teaser">
                  Trip home from Colombo has been arranged, then Jenna will come
                  get me from Stockholm. :)
                </span>
              </Link>
              <div className="date">Mar 6</div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

MailsList.propTypes = {
  mails: PropTypes.array,
  onGetMails: PropTypes.func,
}

export default withRouter(MailsList)
