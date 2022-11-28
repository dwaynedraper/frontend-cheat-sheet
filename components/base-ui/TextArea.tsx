import React from 'react';

type TextAreaProps = {
  classes: string,
  id: string,
  name: string,
  placeholder: string,
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export default function TextArea({ classes, id, name, placeholder, onBlur, onChange }: TextAreaProps) {

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <div className="relative flex items-center mt-4">
            {/* <label htmlFor={label}>{label}</label> */}
            <textarea id={id} name={name} placeholder={placeholder} onBlur={onBlur} onChange={onChange} className={`drop-shadow-md max-w-full rounded p-1 hover:bg-slate-200 ${classes}`} rows={5} cols={40} />
          </div>
        </form>
      </div>
    </section>
  );
};
