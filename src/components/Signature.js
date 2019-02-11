import React from 'react'

const Signature = ({ firstName, lastName, post, address, phone, email }) => (
  <div style={{ overflow: 'hidden', textAlign: 'left' }}>
    <div>
      <br />
      <table>
        <tbody>
          <tr>
            <td
              style={{
                paddingRight: '10px',
                borderRight: '1px solid #BD4932',
              }}
            >
              <a
                href="https://www.smooth-code.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="smooth-code logo"
                  src="https://res.cloudinary.com/smooth/image/upload/v1532531188/logo-vertical_2x_z74fq7.png"
                  style={{
                    borderStyle: 'none',
                    display: 'block',
                    width: '120px',
                    marginLeft: '2px',
                  }}
                />
              </a>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td style={{ minWidth: '250px', paddingLeft: '10px' }}>
                      <a
                        style={{
                          textDecoration: 'none',
                          color: '#333333',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: '12px',
                          fontWeight: 'bold',
                        }}
                        href="https://www.smooth-code.com/trainers/jeremy-sfez"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {`${firstName} ${lastName.toUpperCase()}`}
                        <div
                          style={{
                            marginTop: '5px',
                            color: '#BD4932',
                            fontWeight: 'normal',
                          }}
                        >
                          {post}
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      <table>
                        <tbody>
                          {email && (
                            <tr>
                              <td style={{ paddingRight: '5px' }}>
                                <img
                                  alt=""
                                  src="https://res.cloudinary.com/smooth/image/upload/v1539015528/envelope_lit95n.svg"
                                  style={{
                                    borderStyle: 'none',
                                    minWidth: '15px',
                                    height: '15px',
                                    marginRight: '5px',
                                    border: '0',
                                    width: '15px',
                                  }}
                                />
                              </td>
                              <td>
                                <a
                                  style={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'Arial,sans-serif',
                                    fontSize: '12px',
                                  }}
                                  href={`mailto:${email}`}
                                >
                                  {email}
                                </a>
                              </td>
                            </tr>
                          )}
                          {address && (
                            <tr>
                              <td style={{ paddingRight: '5px' }}>
                                <img
                                  alt=""
                                  src="https://res.cloudinary.com/smooth/image/upload/v1539015595/placeholder_1_ah6sr3.svg"
                                  style={{
                                    borderStyle: 'none',
                                    width: '15px',
                                    height: '15px',
                                    marginRight: '5px',
                                    border: '0',
                                  }}
                                />
                              </td>
                              <td>
                                <a
                                  style={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'Arial,sans-serif',
                                    fontSize: '12px',
                                  }}
                                  href="https://goo.gl/uM2Dh3"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {address}
                                </a>
                              </td>
                            </tr>
                          )}
                          {phone && (
                            <tr>
                              <td style={{ paddingRight: '5px' }}>
                                <img
                                  alt=""
                                  src="https://res.cloudinary.com/smooth/image/upload/v1539025150/phone-receiver_1_xnjgcs.svg"
                                  style={{
                                    borderStyle: 'none',
                                    width: '15px',
                                    height: '15px',
                                    marginRight: '5px',
                                    border: '0',
                                  }}
                                />
                              </td>
                              <td>
                                <a
                                  style={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'Arial,sans-serif',
                                    fontSize: '12px',
                                  }}
                                  href={`tel:${phone}`}
                                >
                                  {phone}
                                </a>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div
                style={{
                  backgroundColor: '#BD4932',
                  width: '400px',
                  padding: '10px',
                  marginTop: '5px',
                }}
              >
                <a
                  style={{
                    textDecoration: 'none',
                    color: '#ffffff',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                  href="https://www.smooth-code.com/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Découvrez les dernières réalisations de l'agence
                  <img
                    alt=""
                    src="https://res.cloudinary.com/smooth/image/upload/v1539015320/external-link-icon_wdqdzg.svg"
                    style={{
                      borderStyle: 'none',
                      height: '15px',
                      float: 'right',
                      border: '0',
                    }}
                  />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Signature