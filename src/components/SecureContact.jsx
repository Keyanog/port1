import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaLock, FaPaperPlane } from 'react-icons/fa';

const FormContainer = styled.div`
  background: rgba(24, 26, 32, 0.98);
  border: 2px solid #23263a;
  border-radius: 18px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
`;

const FormHeader = styled.div`
  color: #5a8fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  svg {
    color: #1aff8b;
  }
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #5a8fff;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Input = styled.input`
  width: 100%;
  background: #181a20;
  border: 1.5px solid #23263a;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: #e3e8ff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #1aff8b;
    box-shadow: 0 0 0 2px rgba(26, 255, 139, 0.1);
  }
  
  &::placeholder {
    color: #4a4f6d;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: #181a20;
  border: 1.5px solid #23263a;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: #e3e8ff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    border-color: #1aff8b;
    box-shadow: 0 0 0 2px rgba(26, 255, 139, 0.1);
  }
  
  &::placeholder {
    color: #4a4f6d;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #1aff8b 0%, #5a8fff 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  
  &:hover {
    background: linear-gradient(90deg, #5a8fff 0%, #1aff8b 100%);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const StatusMessage = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.success ? '#1aff8b' : '#ff5a5a'};
  font-size: 0.9rem;
`;

const SecureContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ message: '', success: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', success: false });

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        message: 'Message transmitted successfully! 🚀',
        success: true
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        message: 'Transmission failed. Please try again.',
        success: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <FaLock /> SECURE-TRANSMISSION://ENCRYPT
      </FormHeader>
      
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">SENDER_ID</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="email">RETURN_ADDRESS</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="message">PAYLOAD</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
        </FormField>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Transmitting...' : 'Transmit Securely'}
          <FaPaperPlane />
        </SubmitButton>

        {status.message && (
          <StatusMessage success={status.success}>
            {status.message}
          </StatusMessage>
        )}
      </form>
    </FormContainer>
  );
};

export default SecureContact; 