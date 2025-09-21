import MaterialSettingsSharp from '~icons/material-symbols/settings-sharp'

function SettingsButton() {
  return (
    <button type="button" className="aug-button px-4 py-4 cursor-pointer" data-augmented-ui="tr-clip bl-clip both">
      <MaterialSettingsSharp className="w-6 h-6" />
    </button>
  )
}

export default SettingsButton
