import React from 'react'

const Signature = ({
  firstName,
  lastName,
  position,
  address,
  phone,
  email,
}) => (
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
                  alt="Smooth Code"
                  src="https://res.cloudinary.com/smooth/image/upload/c_scale,w_120,dpr_2/v1532531188/mail-signature/smooth-code-logo.png"
                  style={{
                    borderStyle: 'none',
                    display: 'block',
                    width: '120px',
                    marginLeft: '2px',
                    textDecoration: 'none',
                  }}
                />
              </a>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td
                      style={{
                        minWidth: '250px',
                        paddingLeft: '10px',
                        color: '#333333',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      {`${firstName} ${lastName.toUpperCase()}`}
                      <div
                        style={{
                          marginTop: '5px',
                          color: '#BD4932',
                          fontWeight: 'normal',
                        }}
                      >
                        {position}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '10px' }}>
                      <table>
                        <tbody>
                          {address && (
                            <tr>
                              <td style={{ paddingRight: '5px' }}>
                                <img
                                  alt=""
                                  src="https://res.cloudinary.com/smooth/image/upload/e_trim,c_scale,w_16,h_16,dpr_2/v1539015595/mail-signature/location-icon.svg"
                                  style={{
                                    borderStyle: 'none',
                                    width: '16px',
                                    height: '16px',
                                    border: '0',
                                  }}
                                />
                              </td>
                              <td
                                style={{
                                  textDecoration: 'none',
                                  color: '#333333',
                                  fontFamily: 'Arial,sans-serif',
                                  fontSize: '12px',
                                }}
                              >
                                {address}
                              </td>
                            </tr>
                          )}
                          {phone && (
                            <tr>
                              <td style={{ paddingRight: '5px' }}>
                                <img
                                  alt=""
                                  src="https://res.cloudinary.com/smooth/image/upload/e_trim,c_scale,w_16,h_16,dpr_2/v1539025150/mail-signature/phone-icon.svg"
                                  style={{
                                    borderStyle: 'none',
                                    width: '16px',
                                    height: '16px',
                                    border: '0',
                                  }}
                                />
                              </td>
                              <td
                                style={{
                                  textDecoration: 'none',
                                  color: '#333333',
                                  fontFamily: 'Arial,sans-serif',
                                  fontSize: '12px',
                                }}
                              >
                                {phone}
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
                  Découvrez les dernières réalisations du studio
                  <img
                    alt=""
                    src="https://res.cloudinary.com/smooth/image/upload/e_trim,c_scale,w_16,h_16,dpr_2/v1539015320/mail-signature/external-link-icon.svg"
                    style={{
                      borderStyle: 'none',
                      width: '16px',
                      height: '16px',
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
